import $, { data } from 'jquery';
import body from '../script';

export default function btnsScrollDown() {
    $('.icons-down').on('click', function(e) {
        e.preventDefault();
        const footer = $('.footer');
       
        body.stop().animate({scrollTop:$(footer).offset().top}, 1000);
      });
}
