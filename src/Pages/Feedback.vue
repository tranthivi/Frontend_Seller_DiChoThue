<template>
    <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="page-title-box">
                            <div class="row align-items-center">
                                <div class="col-sm-6">
                                    <h4 class="page-title">Đánh giá đơn hàng</h4>
                                </div>
                            </div> <!-- end row -->
                        </div>
                        <!-- end page-title -->

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card m-b-30">
                                    <div class="card-body">
        
                                    <h4 class="mt-0 header-title">Điền đầy đủ thông tin </h4>
                                    <p></p>
        
                                    <!-- Form -->
                                        <form class="" action="#">
                                            <div class="form-group">
                                                <label>ID đơn hàng</label>
                                                <input type="text" class="form-control" required="" placeholder="Id">
                                            </div>


                                            <div class="form-group">
                                                <label>Nội dung</label>
                                                <div>
                                                    <textarea required="" class="form-control" rows="5" placeholder="Nội dung đánh giá"></textarea>
                                                </div>
                                            </div>             
                                            <div class="form-group">
                                                <label>Điểm</label>
                                                <div class="input-group">
                                                    <input data-parsley-type="number" type="text" class="form-control" required="" placeholder="Điểm đánh giá từ 1 đến 5">
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                        Đánh giá
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
