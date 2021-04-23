<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body style="background-color:#f0f0f0">
        <div class="container-fluid w-50 mt-4">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="shadow p-2 bg-white">
                        <h1 class="display-5">Register</h1>
                        <form action="" method="POST">
                            <INPUt type="text" class="form-control mb-2" placeholder="First Name" name="fname"></INPUt>
                            <INPUt type="text" class="form-control mb-2" placeholder="Last Name" name="lname"></INPUt>
                            <INPUt type="text" class="form-control mb-2" placeholder="E-mail" name="mail"></INPUt>
                            <INPUt type="text" class="form-control mb-2" placeholder="Password" name="password"></INPUt>
                            <p>Birthday</p> 
                            <INPUt type="date" class="form-control" name="bdate"></INPUt>
                            <p>Gender</p>
                            <input type="radio" name="gender" value="Male"> Male
                            <input type="radio" name="gender" value="Female"> Female
                            <input type="submit" value="Register" class="btn btn-primary w-100 mt-3">
                        </form>
                        <a href='login.php'>login<a>
                    </div>
                </div>            
            </div>
        </div>
    </body>

</html>

<?php

if($_POST){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['mail'];
    $password = $_POST['password'];
    $bdate = $_POST['bdate'];
    $gender = $_POST['gender'];

    include("conn.php");

    $stmt = $conn->prepare("INSERT INTO users (user_fname, user_lname ,user_mail ,user_password ,user_bdate ,user_gender) VALUES (?,?,?,?,?,?)");
    $stmt->bind_param("ssssss",$fname,$lname,$email,$password,$bdate,$gender);

    if($stmt->execute()){
        echo "<p>Register done! <a href='login.php'>login<a>";
    }else{
        echo "Error";
    }
}

?>