<template>
    <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h4 class="page-title">Update Pizza</h4>
                                </div>
                            </div> <!-- end row -->
                        </div>
                        <!-- end page-title -->

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card m-b-30">
                                    <div class="card-body">
        
                                    <h4 class="mt-0 header-title">Sửa thông tin của sản phẩm cần cập nhật</h4>
                                    <p></p>
        
                                    <!-- Form -->
                                        <form class="" action="#">
                                            <div class="form-group">
                                                <label>ID sản phẩm</label>
                                                <input type="text" class="form-control" required="" placeholder="Id">
                                            </div>
                                            <div class="form-group">
                                                <label>Tên</label>
                                                <input type="text" class="form-control" required="" placeholder="Tên sản phẩm">
                                            </div>

                                            <div class="form-group col-sm-2 img-picker-container"> 
                                                <label>Ảnh đại diện</label>
                                                <div class="img-picker"><div class="form-control img-upload-btn"><i class="fas fa-plus"></i><input type="file" name="images"></div></div>
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
                                                        <option>Rau củ quả</option>
                                                        <option>Thịt</option>
                                                        <option>Trứng</option>
                                                        <option>Sữa</option>
                                                        <option>Thuốc</option>
                                                        <option>Trái cây</option>
                                                        <option>Vật tư y tế</option>
                                                        <option>Cá</option>
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
                                                        Update
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