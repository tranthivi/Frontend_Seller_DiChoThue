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
                        <h4 class="page-title">Quản Lý Đơn hàng</h4>
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
    
                                        </div>
                                        
                                        <div class="table-responsive">
                                            <table class="table table-striped mb-0">
                                                <thead>
                                                    <tr class="bg-primary">
                                                        <th>#</th>
                                                        <th>Ngày đặt</th>
                                                        <th>Phí ship</th>
                                                        <th>Tổng tiền</th>
                                                        <th>Hình thức thanh toán</th>
                                                        <th>ID Khách hàng </th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody v-for="(donhang, index) in productJson" :key="index">
                                                    <tr>
                                                        <th scope="row">{{index + 1}}</th>
                                                        <td>{{donhang.NgayDat}}</td>
                                                        <td>{{donhang.PhiShip}}<var>đ</var></td>
                                                        <td>{{donhang.TongTien}}</td>
                                                        <td>{{donhang.HinhThucThanhToan}}</td>
                                                        <td>{{donhang.KhachHangId}}</td>
                                                     <td>
                                                        <div class="btn-toolbar form-group mb-0">
                                                            <div class="row">
                                                                <a href="/#/Feedback" role="button" class="btn btn-success waves-effect waves-light m-r-5"> Đánh giá <i class="far fa-edit"></i></a>                                      
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                            </table>

                                            
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
      let url = 'https://localhost:44368/api/orderlist';
      axios.get(url).then((response) => {
       this.productJson = response.data; 
      });
    },

   deleteproduct(cmnd){
        let url = `https://localhost:44368/api/orderlist/${SanPhamId}`;
       
        axios.delete(url, SanPhamId).then(response => {
            if (response.data == 'success') {
                // Tạm thời
                this.$router.go();
            }
        }) 
        .catch(error => {
            this.errorMessage=error.message; 
            console.error("There was an error", error);
        });
    },

    updateproductState(product){
        if (product.TrangThai === this.LOCKED_STATE) {
            product.TrangThai = this.ACTIVE_STATE;
        } else {
            product.TrangThai = this.LOCKED_STATE;
        }

        let url = 'https://localhost:44368/api/orderlist';
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