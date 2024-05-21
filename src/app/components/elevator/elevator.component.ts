import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-elevator',
  standalone: true,
  imports: [],
  templateUrl: './elevator.component.html',
  styleUrl: './elevator.component.scss'
})
export class ElevatorComponent implements OnInit{
  constructor() { }
  ngOnInit(): void {
      var current = 0;
      $(document).ready(function () {
        $('#floorSelect li').click(function () {
          var floor = parseInt($(this).data('floor')),
            height = floor * 24.2,
            animate = Math.abs(current - floor) * 1000;
          if (floor == current) return;
          $('#rightDoor').removeClass('active-right');
          $('#leftDoor').removeClass('active-left');
          setTimeout(function () {
            $('#elevatorContainer').css(
              'transition',
              'all ' + animate + 'ms linear'
            );
            $('#elevatorContainer').css('bottom', height + '%');
            current = floor;
            setTimeout(function () {
              $('#rightDoor').addClass('active-right');
              $('#leftDoor').addClass('active-left');
            }, animate);
          }, 300);
        });
      });
  }
}
