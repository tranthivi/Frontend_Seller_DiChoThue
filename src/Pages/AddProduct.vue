<template>
    <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h4 class="page-title">Thêm sản phẩm</h4>
                                </div>
                            </div> <!-- end row -->
                        </div>
                        <!-- end page-title -->

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card m-b-30">
                                    <div class="card-body">
        
                                    <h4 class="mt-0 header-title">Điền đầy đủ thông tin của sản phẩm cần thêm</h4>
                                    <p></p>
        
                                    <!-- Form -->
                                        <form class="" action="#">
                                            <div class="form-group">
                                                <label>Tên</label>
                                                <input type="text" class="form-control" required="" placeholder="Tên sản phẩm">
                                            </div>

                                            <div class="form-group">
                                                <label>Hình ảnh</label>
                                                <input type="text" class="form-control" required="" placeholder="Link url">
                                            </div>

                                            <div class="form-group">
                                                <label>Mô tả</label>
                                                <div>
                                                    <textarea required="" class="form-control" rows="5" placeholder="Mô tả sản phẩm"></textarea>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Giá tiền</label>
                                                <div class="input-group">
                                                    <input data-parsley-type="number" type="text" class="form-control" required="" placeholder="Giá tiền sản phẩm">

                                                    <div class="input-group-append">
                                                        <span class="input-group-text">VNĐ</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Loại</label>
                                                <div>
                                                    <select class="form-control">
                                                        <option value = "1">1 - Rau củ quả</option>
                                                        <option value = "2">2 - Thịt</option>
                                                        <option value = "3">3 - Trứng</option>
                                                        <option value = "4">4 - Sữa</option>
                                                        <option value = "5">5 - Thuốc</option>
                                                        <option value = "6">6 - Trái cây</option>
                                                        <option value = "7">7 - Vật tư y tế</option>
                                                        <option value = "8">8 - Cá</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Đơn vị tính</label>
                                                <input type="text" class="form-control" required="" placeholder="Đơn vị">
                                            </div>
                                            <div class="form-group">
                                                <label>Số Lượng</label>
                                                <div class="input-group">
                                                    <input data-parsley-type="number" type="text" class="form-control" required="" placeholder="Số lượng">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                        Thêm
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Bỏ qua
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
        
                                    </div>
                                </div>
                            </div> <!-- end col -->
                      
                        </div> <!-- end row -->                             
                    </div>
                    <!-- container-fluid -->

                </div>
                <!-- content -->

    <footer class="footer">
        © 2021 DiChoThue <span class="d-none d-sm-inline-block"><i class="mdi mdi-heart text-danger"></i></span>.
    </footer>

            </div>
</template>
<script>

</script>
