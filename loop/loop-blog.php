<?php 
$thumbnail_id = get_post_thumbnail_id( $post->ID );
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
$short_decription = get_field('short_decription');
?>


<div class="col-xs-12 col-md-4 col-lg-3">
	<div class="blog-card-1">
		<a class="blog-card-1__wrapper-link" href="<?php the_permalink();?>">	
			<div class="blog-card-1__wrapper-image"> 
				<img class="blog-card-1__image img-fluid" src="<?php echo the_post_thumbnail_url();?>" alt="<?php echo $alt;?>" /> 
				<span class="blog-card-1__overlay"></span>
			</div>
			<div class="blog-card-1__content">
				<div class="blog-card-1__title"><?php the_title(); ?></div>
				<!-- <p class="blog-card-1__description"><?php echo $short_decription; ?></p> -->
				<div class="blog-card-1__date">
					<?php echo get_the_date('Y.m.d'); ?>
				</div>
			</div>
		</a>
	</div>
</div>