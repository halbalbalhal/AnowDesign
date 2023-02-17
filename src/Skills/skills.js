class Skills {
    render() {
        const html =`
            <!-- skills of team -->
            <section class="skills">
                <div class="skills__wrapper">
                    <div class="skills__info">
                        <span class="title">modern digital creative agency</span>
                        <p class="text">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                    </div>

                    <div class="skills__sliders">
                        <div class="skills__sliders-slider">
                            <div class="sliders__text">
                                <span class="registration__title">Illustration</span>
                                <p class="text">90%</p>
                            </div>
                            <div class="slider">
                                <div class="slider__gradient">
                                    <!-- ЭТО БЛОК ДЛЯ ГРАДИЕНТА!!!!!(В НЕМ НИЧЕГО НЕТ!!!!!) -->
                                </div>
                            </div>
                        </div>

                        <div class="skills__sliders-slider">
                            <div class="sliders__text sliders__text-design">
                                <span class="registration__title">Web Design</span>
                                <p class="text">80%</p>
                            </div>
                            <div class="slider">
                                <div class="slider__gradient-design slider__gradient">
                                    <!-- ЭТО БЛОК ДЛЯ ГРАДИЕНТА!!!!!(В НЕМ НИЧЕГО НЕТ!!!!!) -->
                                </div>
                            </div>
                        </div>

                        <div class="skills__sliders-slider">
                            <div class="sliders__text slider__text-development">
                                <span class="registration__title">Development</span>
                                <p class="text">95%</p>
                            </div>
                            <div class="slider">
                                <div class="slider__gradient slider__gradient-development">
                                    <!-- ЭТО БЛОК ДЛЯ ГРАДИЕНТА!!!!!(В НЕМ НИЧЕГО НЕТ!!!!!) -->
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `

        ROOT_SKILLS.innerHTML = html
    }
}

const skills = new Skills()