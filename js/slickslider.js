$("#js-slick").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  dots: true,
  infinite: true,
  autoWidth: true,
  variableWidth: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
