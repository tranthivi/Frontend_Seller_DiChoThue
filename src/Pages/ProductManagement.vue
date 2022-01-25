<template>
<!-- ============================================================== -->
<!-- Start right Content here -->
<!-- ============================================================== -->

<div class="content-page">
    <!-- Start content -->
    <div class="content">
        <div class="container-fluid">
            <div class="page-title-box">
                            
                        </div>
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <h4 class="page-title">Quản Lý Sản Phẩm</h4>
                    </div>
                </div>
                <!-- end row -->

            <!-- end page-title -->

            <div class="row">
                            <div class="col-lg-12">
                                <div class="card m-b-30">
                                    <div class="card-body">
        
                                        <div class="row p-3">
                                            <div class="col-lg-4">
                                                <form role="search" class="email-inbox">
                                                    <div class="form-group mb-0">
                                                        <input type="text" class="form-control rounded" placeholder="Tìm kiếm..">
                                                        <button type="submit"><i class="fa fa-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
    
                                            <div class="col-lg-8">
                                                <div class="btn-toolbar float-lg-right form-group mb-0" role="toolbar">
                                                    <div class="">
                                                        <a href="/#/AddProduct" class="btn btn-info waves-effect waves-light  m-r-5" role="button"><i class="fas fa-plus"></i> <i></i> <span>Thêm sản phẩm</span> </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
    
                                        </div>
                                        
                                        <div class="table-responsive">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary">
                                                        <th>#</th>
                                                        <th>Tên sản phẩm</th>
                                                        <th>Hình ảnh</th>
                                                        <th>Giá sản phẩm</th>
                                                        <th>Đơn vị tính</th>
                                                        <th>Mô tả</th>
                                                        <th>Số lượng tồn</th>
                                                        <th>Trạng thái</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(sanpham, index) in productJson" :key="index">
                                                    <tr>
                                                        <th scope="row">{{index + 1}}</th>
                                                        <td>{{sanpham.TenSP}}</td>
                                                        <td><img style="width: 120px " :src="sanpham.HinhAnh"></td>
                                                        <td>{{sanpham.GiaSP}}<var>đ</var></td>
                                                        <td>{{sanpham.DonViTinh}}</td>
                                                        <td>{{sanpham.MoTa}}</td>
                                                        <td>{{sanpham.SoLuongTon}}</td>
                                                        <td><span class="badge badge-info">{{sanpham.TrangThai}}</span></td>
                                                     <td>
                                                        <div class="btn-toolbar form-group mb-0">
                                                            <div class="row">
                                                                <a href="/#/UpdateProduct" role="button" class="btn btn-success waves-effect waves-light m-r-5" v-on:click = "Put(sanpham)"><i class="far fa-edit"></i></a>                                      
                                                        <button type="button" class="btn btn-danger waves-effect waves-light m-r-5" data-toggle="modal" data-target="#alertDeleteModal" v-on:click = "deleteproduct(sanpham.SanPhamId)"><i class="far fa-trash-alt"></i></button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                            </table>

                                            <!-- modal -->
                                            <div id="alertDeleteModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title mt-0" id="myModalLabel">Cảnh báo</h5>
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">×</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <h5 class="font-16">Bạn có chắc chắn muốn xóa sản phẩm xxx không?</h5>
                                                            <p></p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Cancel</button>
                                                            <button type="button" class="btn btn-primary waves-effect waves-light">Delete</button>
                                                        </div>
                                                    </div><!-- /.modal-content -->
                                                </div><!-- /.modal-dialog -->
                                            </div><!-- /.modal -->
                                        </div>
                                    </div>
                                </div>
                            </div> <!-- end col -->
        
                          
                        </div>
            <!-- end col -->
        </div>
    </div>
    <!-- container-fluid -->

    <!-- content -->

    <footer class="footer">
        © 2021 DiChoThue <span class="d-none d-sm-inline-block"><i class="mdi mdi-heart text-danger"></i></span>.
    </footer>
</div>
<!-- ============================================================== -->
<!-- End Right content here -->
<!-- ============================================================== -->
</template>


<script>
import axios from 'axios';

export default {
    name: 'productManagement',
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      let url = 'https://localhost:44368/api/product/1';
      axios.get(url).then((response) => {
       this.productJson = response.data; 
      });
    },

   deleteproduct(SanPhamId){
        let url = `https://localhost:44368/api/product/delete/${SanPhamId}`;
       
        axios.get(url).then(response => {
            if (response.data == 'success') {
                // Tạm thời
                
            }
            let url = 'https://localhost:44368/api/product/1';
            axios.get(url).then((response) => {
            this.productJson = response.data; 
             });
        }) 
        .catch(error => {
            this.errorMessage=error.message; 
            console.error("There was an error", error);
        });
    },

    updateproductState(product){
        let url = 'https://localhost:44368/api/product';
        axios.put(url, product).then(response => {
           console.log(response.data);
        }) 
        .catch(error => {
            this.errorMessage=error.message; 
            console.error("There was an error", error);
        });
    }
  },
  data () {
    return {
     productJson: "",
    }
  },
}
</script>
