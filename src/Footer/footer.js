class Footer {
    render() {
        const html = `
            <!-- footer -->
            <footer class="footer" id="footer">
                <div class="footer__main">
                    <div class="footer__main-number">
                        <span class="title footer__title">anow</span>
                        <p class="text">+ (0712) 819 79 555 | M: info@example.com</p>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Home</span>
                        <a href="#" class="text footer__link">Home Portfolio</a>
                        <a href="#" class="text footer__link">Home Agency</a>
                        <a href="#" class="text footer__link">Home Architecture</a>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Portfolio</span>
                        <a href="#" class="text footer__link">Masonry Portfolio</a>
                        <a href="#" class="text footer__link">Grid Portfolio</a>
                        <a href="#" class="text footer__link">Metro Portfolio</a>
                        <a href="#" class="text footer__link">Service Details</a>
                    </div>

                    <div class="footer__block">
                        <span class="little__title footer__title">Blog</span>
                        <a href="#" class="text footer__link">Blog Style 1</a>
                        <a href="#" class="text footer__link">Blog Style 2</a>
                        <a href="#" class="text footer__link">Blog Style 3</a>
                        <a href="#" class="text footer__link">Licensing</a>
                    </div>
                </div>
                <p class="text footer__afterwords">© Anow. All Rights Reserved 2022 — Designed by 128.digital. Powered by Webflow</p>
            </footer>
        `
        ROOT_FOOTER.innerHTML = html
    }
}

const footer = new Footer()