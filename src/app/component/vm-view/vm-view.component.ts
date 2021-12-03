import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Vm from 'src/app/models/Vm';
import { VmService } from 'src/app/service/vm.service';

@Component({
  selector: 'app-vm-view',
  templateUrl: './vm-view.component.html',
  styleUrls: ['./vm-view.component.scss']
})
export class VmViewComponent implements OnInit {

  myVms: Array<Vm> = []

  constructor(private router: Router, private vmservice: VmService) { }

  ngOnInit(): void {
    this.vmservice.getVms().then((res: any) => {
      console.log("res", res)
      
    ///  this.myVms = res
    })

  }

  anything($event: any) {
    console.log($event);
  }

}
