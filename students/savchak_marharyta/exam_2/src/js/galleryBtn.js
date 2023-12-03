import $, { data } from 'jquery';

export default function btnGallery() {
    $(".gallery__link-img").slice(5).hide();
    $(".gallery__btn").on('click', function (e) {
        e.preventDefault();
        $(".gallery__link-img").slice(5).show();

        if ($(".gallery__link-img").slice(5).show()) {
            $(".gallery__btn").css({ display: 'none' });
        }

    });
}
