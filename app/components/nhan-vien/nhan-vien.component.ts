import { Component, OnInit } from '@angular/core';
import { Nhan_vien_full_time, Nhan_vien_part_time, Nhan_vien} from '../../services/nhan-vien.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nhan-vien',
  templateUrl: 'app/components/nhan-vien/nhan-vien.component.html',
  styleUrls: ['app/components/nhan-vien/nhan-vien.component.css']
})
export class NhanVienComponent implements OnInit {
  nv : Nhan_vien[];
  myform: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.nv = [];
    this.nv.forEach(s => {
      s.tinh_luong();
    });
  }
  khoi_tao_form(){
    this.myform = this.fb.group({
      ten:['',Validators.required],
      loai:['',Validators.required],
      chuc_vu:[null,Validators.required],
      ngay:[null],
      gio:[null]
    })
  }
  them_vao_mang(){
    var du_lieu = this.myform.value;
    if(du_lieu.loai){
      if(du_lieu.loai == 'full_time'){
        let nv_full = new Nhan_vien_full_time(du_lieu.ten ? du_lieu.ten : 'Không tên', du_lieu.ngay ? du_lieu.ngay : 0);
        du_lieu.chuc_vu ? nv_full.setLoaiChucVu(du_lieu.chuc_vu) : nv_full.setLoaiChucVu(2);
        nv_full.tinh_luong();
        du_lieu.nv.push(nv_full);
      }else{
        if(du_lieu.loai == 'part_time'){
          let nv_part = new Nhan_vien_part_time(du_lieu.ten ? du_lieu.ten : 'Không tên', du_lieu.gio ? du_lieu.gio : 0);
          nv_part.tinh_luong();
          this.nv.push(nv_part);
        }
      }
    }else{
      return;
    }
    this.xoa_du_lieu();
  }
  xoa_du_lieu(){
    this.myform.reset({
    ten : '',
    loai : '',
    chuc_vu : null,
    ngay : null,
    gio : null
    })
  }
  cap_nhat(nhan_vien: any){
    this.myform.patchValue({
      ten : nhan_vien.ten,
      loai : nhan_vien.loai,
      chuc_vu : nhan_vien.tchuc_vuen,
      ngay : nhan_vien.ngay,
      gio : nhan_vien.gio
      })
  }
}
