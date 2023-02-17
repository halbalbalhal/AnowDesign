class Registration {
    render() {
        const html = `
            <!-- registration -->
            <section class="registration" id="contacts">
                <div class="registration__wrapper">
                    <div class="registration__info">
                        <div class="regsitration__info-address">
                            <span class="text">adress</span>
                            <p class="registration__title">14 tottenham road,</p>
                            <span class="registration__title">london, england</span>
                        </div>

                        <div class="registration__info-mail">
                            <span class="text">Information</span>
                            <p class="registration__title">info@yourdomain.com</p>
                            <span class="registration__title">(+68) 12004509</span>
                        </div>
                    </div>

                    <div class="registration__inputs">
                        <div class="inputs-data">
                            <input type="text" class="input__little" placeholder="Your name">
                            <input type="text" class="input__little" placeholder="Your email">
                        </div>
                        <textarea cols="30" rows="10" class="input__big" placeholder="Your message"></textarea>
                    </div>
                    <button class="button">Send Message</button>
                </div>
            </section>
        `
        ROOT_REGISTRATION.innerHTML = html
    }
}

const registration = new Registration()