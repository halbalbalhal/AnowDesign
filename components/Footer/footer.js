class Footer {
    render() {
        const html = `
            <!-- footer -->
            <footer class="footer">
                <div class="footer__main">
                    <div class="footer__main-number">
                        <span class="title footer__title">anow</span>
                        <p class="text">+ (0712) 819 79 555 | M: info@example.com</p>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Home</span>
                        <span class="text footer__link">Home Portfolio</span>
                        <span class="text footer__link">Home Agency</span>
                        <span class="text footer__link">Home Architecture</span>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Portfolio</span>
                        <span class="text footer__link">Masonry Portfolio</span>
                        <span class="text footer__link">Grid Portfolio</span>
                        <span class="text footer__link">Metro Portfolio</span>
                        <span class="text footer__link">Service Details</span>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Blog</span>
                        <span class="text footer__link">Blog Style 1</span>
                        <span class="text footer__link">Blog Style 2</span>
                        <span class="text footer__link">Blog Style 3</span>
                        <span class="text footer__link">Licensing</span>
                    </div>
                </div>
                <p class="text footer__afterwords">© Anow. All Rights Reserved 2022 — Designed by 128.digital. Powered by Webflow</p>
            </footer>
        `
        ROOT_FOOTER.innerHTML = html
    }
}

const footer = new Footer()