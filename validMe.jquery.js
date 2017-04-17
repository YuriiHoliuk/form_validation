(function($) {

    $.fn.validMe = function() {

        return this.each(function() {

            let ths = $(this);

            const SUPPORT_TYPES = ['name'];

            const INPUT_TYPES = {
                name: {
                    regex: /^((?!_)(?!\n)(?!\r)[a-zA-Z-\s]){2,30}$/g,
                    errorMessage: 'Only latin letters, "space" and "-", from 3 to 30 symbols'
                }
            }

            class Field {

                constructor(field) {
                    this.field = field;
                    this.error = field.after('<p>').addClass('error').hide();
                    this.type = field.data('validme');
                    this.regex = INPUT_TYPES[this.type.regex];
                    this.errorMessage = INPUT_TYPES[this.type.errorMessage];

                    this.field.on('blur', (e) => {
                        this.valid();
                    });
                }

                valid() {
                    console.log(this);
                    console.log(this.field.value.match(this.regex));
                }

            }

            let fields = [];
            ths.find('input, textarea, select').each((i, field) => {
                if ($(field).attr('data-validme') && !~SUPPORT_TYPES.indexOf($(field).data('validme'))) {
                    fields.push(new Field(field));
                }
            });

        });

    }

})(jQuery);