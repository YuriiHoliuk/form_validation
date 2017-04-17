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

            function Field(field) {

                this.field = field;
                this.error = $('<p>').insertAfter(this.field).addClass('error').hide();
                this.type = this.field.attr('data-validme');
                this.regex = INPUT_TYPES[this.type].regex;
                this.errorMessage = INPUT_TYPES[this.type].errorMessage;

                console.log(this.field);

                this.field.on('blur', (e) => {
                    this.valid();
                });
            }

            Field.prototype.valid = function() {
                this.field.val().match(this.regex) ? console.log('correct') : this.error.text(this.errorMessage).show();
            }

            let fields = [];
            ths.find('input, textarea, select').each((i, field) => {
                if ($(field).attr('data-validme') && !!~SUPPORT_TYPES.indexOf($(field).attr('data-validme'))) {
                    console.log('lol');
                    fields.push(new Field($(field)));
                }
            });

        });

    }

})(jQuery);