import { Component, OnInit } from '@angular/core';
import { Tooltip,registerables } from 'chart.js';
import {  ArcElement, BarController, BarElement, BubbleController, CategoryScale, Chart, DecimationAlgorithm, DoughnutController, Filler, Legend, LinearScale, LineController, LineElement, LogarithmicScale, PieController, PointElement, PolarAreaController, RadarController, RadialLinearScale, ScatterController, TimeScale, TimeSeriesScale, Title } from 'node_modules/chart.js';
import { Product } from 'src/app/model/product';
import { OrderDetailService } from 'src/app/service/order-detail.service';
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
  constructor(
    private productService:ProductService,
    private orderDetailService:OrderDetailService
  ){}
  ngOnInit() {
    
    this.userId = JSON.parse(sessionStorage.getItem('user'));
    
    
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
    this.loadChart(this.userId);
    this.thongkespTheoluotxem(this.luotXem,this.nameproduct);
    this.ThongKesoluongbanra(this.nameproduct,this.spbanra)
    this.thongkeDoanhthu(this.nameproduct,this.doanhthu);
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
    let myChart1 = new Chart(this.ctx1, {
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
    let myChart2 = new Chart(this.ctx2, {
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
    let myChart3 = new Chart(this.ctx3, {
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
    this.productService.getProduct(masp).subscribe(
      Response=>{
        this.products=Response
        this.products.forEach(data=>{
          this.nameproduct.push(data.tensp);
          this.luotXem.push(data.luotxem);
          this.orderDetailService.ThongKeSP(data.masp).subscribe(
            Response2=>{
              this.spbanra.push(Response2);
            }
          )
          this.orderDetailService.thongKeDoanhthu(data.masp).subscribe(
            Response3=>{
              let orderdetails=[];
              orderdetails= Response3
              let increaseMoney = 0
              orderdetails.forEach(data2=>{
                increaseMoney+=Number(data2.tongtien)
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
}
