$(document).on('submit', '.review-form', function(event) {
  event.preventDefault();
  try {
    var formData = new FormData($(this).get(0));
    var action = $(this).attr('action');
    var url = action.replace('/reviews#review_form', '');
    var image = formData.get('review[image_attributes][image]');
    var recaptcha = formData.get('g-recaptcha-response');
    var data = {
      'author': formData.get('review[author]'),
      'email': formData.get('review[email]'),
      'content': formData.get('review[content]'),
      'rating': formData.get('review[rating]')
    }

    if (image) {
      data['image_attributes][image'] = image;
    }
    if (recaptcha) {
      data['g-recaptcha-response'] = recaptcha;
    }

    Shop.sendReview(data, {
      id: Shop.config.page_config.product_id
    })
      .done(function (response) {
        $('.reviews-form .js-review-notice').remove()
        $('.reviews-form').prepend(`<div class="notice notice-success">Отзыв успешно отправлен</div>`)
        window.location.href = '#review_form';
        window.location.reload()

        // наработка для вывода
        // var optionsDate = {
        // 	year: 'numeric',
        // 	month: 'numeric',
        // 	day: 'numeric',
        // 	timezone: 'UTC'
        // };
        // var dateNow = new Date().toLocaleString("ru", optionsDate);
        //
        // $('.reviews-items-wrap').prepend(
        // `<div class="reviews-item">
        //   <div class="review-header">
        //     <div class="author"><i class="fa fa-user"></i> ${data.author}</div>
        //     <div class="date"><i class="fa fa-calendar"></i> ${dateNow}</div>
        //     <div class="star-rating-wrapper">
        //       <div class="star-rating">
        //
        //       ${Array(5).map(key => (
        //           `<span class="star-item ${(key + 1) == _.toNumber(data.rating)}"></span>`
        //       )).join('')}
        //
        //       </div>
        //     </div>
        //   </div>
        //   <div class="review-body">
        //     <p class="text">
        //       ${data.content}
        //     </p>
        //   </div>
        //   <div class="review-footer">
        //   </div>
        // </div><!-- /.reviews-item -->`
        // );
      })
      .fail(function (error) {
        console.log('error');
        console.log(error.errors);
        $('.reviews-form .notice-success').remove()
        if (_.size(error.errors)) {
          var errorText = `
          <div>
            Следующие поля заполнены неправильно
          </div>
          <ul>
          ${Object.keys(error.errors).map(key => (
              `<li>
                ${getFieldHumanName(key)}
              </li>`
          )).join('')}
          </ul>
          `
          if ($('.reviews-form .js-review-notice').length) {
            $('.reviews-form .js-review-notice').html(errorText)
          }else{
            $('.reviews-form').prepend(`<div class="notice notice-error editor js-review-notice">${errorText}</div>`)
          }
        }

        grecaptcha.reset()
      })
  } catch (e) {
    console.log(e);
    $.post(action, $(this).serialize())
      .done(function (response) {
        window.location.reload()
      })
  }
});

function getFieldHumanName(key) {
  var result = '';
  if (key == 'author') {
    result = 'Имя'
  } else if (key == 'email') {
    result = 'E-mail'
  } else if (key == 'content') {
    result = 'Сообщение'
  } else if (key == 'captcha_solution') {
    result = 'Капча'
  } else {
    result = '';
  }

  return result;
}
