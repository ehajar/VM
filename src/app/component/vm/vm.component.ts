import { Component, OnInit, Input } from '@angular/core';
import { VmService } from 'src/app/service/vm.service';
import Vm from 'src/app/models/Vm';


@Component({
  selector: 'app-vm',
  templateUrl: './vm.component.html',
  styleUrls: ['./vm.component.scss']
})
export class VmComponent implements OnInit {

  constructor(public vmService: VmService) { }

  @Input() myVM: Vm = Vm.vide();

  ngOnInit(): void {
    
  }

}
