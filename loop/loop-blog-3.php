<?php 
$thumbnail_id = get_post_thumbnail_id( $post->ID );
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
$short_decription = get_field('short_decription');
?>


<div class="col-xs-12 col-md-4 col-lg-4">
	<div class="blog-card-3">
		<a class="blog-card-3__link"  href="<?php the_permalink();?>">
			<div class="blog-card-3__wrapper-card"> 
				<img class="blog-card-3__image img-fluid"  src="<?php echo the_post_thumbnail_url();?>" alt="<?php echo $alt;?>" /> 
				<div class="blog-card-3__content">
					<p class="blog-card-3__title"><?php the_title(); ?></p>
					 <p class="blog-card-1__description"><?php echo $short_decription; ?></p> 
					<p class="blog-card-3__date"><?php echo get_the_date('Y.m.d'); ?></p>
					<!--<div class="blog-card-3__button">
					<a class="button service-section-3__button" href="/">Кнопка</a>
					</div>-->
				</div>
			</div>
		</a>
	</div>
</div>