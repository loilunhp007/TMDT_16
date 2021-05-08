import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Tooltip,registerables } from 'chart.js';
import {  ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, DecimationAlgorithm, DoughnutController, Filler, Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, ScatterController, TimeScale, TimeSeriesScale, Title } from 'node_modules/chart.js';
import { Product } from 'src/app/model/product';
import { OrderDetailService } from 'src/app/service/order-detail.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  canvas1: any;
  ctx1: any;
  canvas2: any;
  ctx2: any;
  canvas3: any;
  ctx3: any;
  products:Array<Product>
  luotXem:any = []
  nameproduct:any = []
  spbanra:any=[]
  doanhthu:any=[]
  userId:String
  select = 1
  myChart1:Chart
  myChart2:Chart
  myChart3:Chart
  months:any=[{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'},{name:'7'},{name:'8'},{name:'9'},{name:'10'},{name:'11'},{name:'12'}]
  constructor(
    private productService:ProductService,
    private orderDetailService:OrderDetailService,
    private orderService:OrderService
  ){}
 
  ngOnInit() {
    
    this.userId = JSON.parse(sessionStorage.getItem('user'));
    this.loadChart(this.userId);
    
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Filler,
      Legend,
      Title,
      Tooltip
    );
    this.getValueWithAsync();
      
  
    //------------------------------------------------------------------------------------------------------------------
    //Top 10 sản phẩm bán chạy trong tháng
    
    //------------------------------------------------------------------------------------------------------------------
    //Top 10 sản phẩm hot trong tháng
   
    //------------------------------------------------------------------------------------------------------------------
    //Thống kê doanh thu trong năm
    
  }
  private thongkespTheoluotxem(luotxem:any[],nameproduct:any[]){
    this.canvas1 = document.getElementById('myChart1');
    this.ctx1 = this.canvas1.getContext('2d');
    this.ctx1 = 'myChart1'
     this.myChart1 = new Chart(this.ctx1, {
      type: 'bar',
      data: {
        labels: nameproduct,
        datasets: [
          {
            label: 'Luot xem',
            data: luotxem,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  }
  private ThongKesoluongbanra(name:any[],spbanra:any[]){
    this.canvas2 = document.getElementById('myChart2');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx2 = 'myChart2'
   this.myChart2 = new Chart(this.ctx2, {
      type: 'bar',
      data: {
        labels: name,
        datasets: [
          {
            label: 'So luong ban ',
            data: spbanra,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  private thongkeDoanhthu(name:any[],doanhthu:any[]){
    this.canvas3 = document.getElementById('myChart3');
    this.ctx3 = this.canvas3.getContext('2d');
    this.ctx3 = 'myChart3'
    this.myChart3 = new Chart(this.ctx3, {
      type: 'bar',
      data: {
        labels: name,
        datasets: [
          {
            label: 'Doanh thu',
            data: doanhthu,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  private loadChart(masp:String){
    this.productService.getProduct(masp).toPromise().then(
      Response=>{
        this.products=Response
        this.products.forEach(data=>{
          this.nameproduct.push(data.tensp);
          this.luotXem.push(data.luotxem);
          this.orderDetailService.ThongKeSP(data.masp).toPromise().then(
            Response2=>{
              this.spbanra.push(Response2);
            }
          )
          
          this.orderService.getAllOrder(this.userId+'').toPromise().then(
            Response3=>{
              let orders=[];
              orders= Response3
              let increaseMoney = 0
              orders.forEach(data2=>{
                let date = new Date(data2.ngaytao);
                let s = date.getMonth();
                if(s == this.select){
                  increaseMoney+=Number(data2.tongtien);
                }
               
              })
              this.doanhthu.push(increaseMoney);
            }
          )
            
        })
      }
    );
  }
  exit() {
    location.reload();
  }
  resolveAfter3Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        this.thongkespTheoluotxem(this.luotXem,this.nameproduct);
        this.ThongKesoluongbanra(this.nameproduct,this.spbanra)
        this.thongkeDoanhthu(this.nameproduct,this.doanhthu);
      }, 1000);
    });
}
async getValueWithAsync() {
  const value = <number>await this.resolveAfter3Seconds(20);
}
selected(select:number){
  this.myChart3.destroy();
  this.doanhthu =[];
  this.orderService.getAllOrder(this.userId+'').toPromise().then(
    Response3=>{
      let orders=[];
      orders= Response3
      let increaseMoney = 0
      orders.forEach(data2=>{
        let date = new Date(data2.ngaytao);
        let s = date.getMonth();
        if(s == this.select){
          increaseMoney+=Number(data2.tongtien);
        }
       
      })
      this.doanhthu.push(increaseMoney);
    }
  )
  setTimeout(()=>{
    this.thongkeDoanhthu(this.nameproduct,this.doanhthu);
  },1000)
  
  console.log(this.select);
}
}
