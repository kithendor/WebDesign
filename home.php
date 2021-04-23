<html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body>

    <?php
        
        session_start();

        if(isset($_SESSION['sess_user_fname'])): ?>
            <div class="bg-success">
                <p>welcome <?php echo $_SESSION['sess_user_fname']; ?> </p>
                <a href="new.php">New</a>
                <a href="profile.php">Profile</a>
                <a href="logout.php">Logout</a>
            </div>
            
       <?php endif;

    ?>

        <h1>Site name</h1>
        
        <div class="container-fluid">
            <div class="row">

                <?php
                    include("conn.php");
                    $sql = "SELECT * FROM recipes";

                    $result = $conn->query($sql);

                    if($result->num_rows>0){
                        
                        while($row = $result->fetch_assoc()){
                            $rec_name_db = $row['rec_name'];
                            $image_name_db = 'images/'.$row['rec_image'];
                            $rec_short_desc_db = $row['rec_short_desc']; ?>

                            <div class="col-4 shadow p-2">
                                <h2> <?php echo $rec_name_db; ?> </h2>
                                <img width="100%" src="<?php echo $image_name_db; ?>">
                                <p> <?php echo $rec_short_desc_db; ?> </p>
                            </div>
                       <?php }                     
                    }
                
                ?>
            
            </div>
        </div>

    </body>
</html>