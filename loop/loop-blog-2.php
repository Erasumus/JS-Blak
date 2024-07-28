<?php 
$thumbnail_id = get_post_thumbnail_id( $post->ID );
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
$short_decription = get_field('short_decription');
?>


<div class="col-xs-12 col-md-6 col-lg-6">
	<div class="blog-card-2">
		<a class="blog-card-2__link" href="<?php the_permalink();?>">
			<div class="blog-card-2__wrapper-image"> 
				<img class="blog-card-2__image img-fluid"  src="<?php echo the_post_thumbnail_url();?>" alt="<?php echo $alt;?>" /> 
				<div class="blog-card-2__content">
					<p class="blog-card-2__title"><?php the_title(); ?></p>
					 <p class="blog-card-1__description"><?php echo $short_decription; ?></p> 
					<p class="blog-card-2__date"><?php echo get_the_date('Y.m.d'); ?></p>
					<div class="blog-card-2__button">
						<div class="button service-section-2__button" >Подробнее</div>
					</div>
				</div>
				<span class="blog-card-2__overlay"></span>
			</div>
			<div class="blog-card-2__back">
				<p class="blog-card-2__description">
					тест
				</p>
			</div>
		</a>
	</div>
</div>