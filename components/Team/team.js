class Team {
    render() {
        const html = `
            <!-- team -->
            <section class="team">
                <div class="team__wrapper">                    
                    <span class="title team__title">Meet Our Awesome Team</span>
                    <div class="team__members ">
                        <div class="team__members-block ">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>

                        <div class="team__members-block member__andy">
                            <span class="team__members-title">Andy Crown</span>
                            <span class="team__members-text">SEO manager</span>
                        </div>

                        <div class="team__members-block member__katy">
                            <span class="team__members-title">Katy Necker</span>
                            <span class="team__members-text">Designer</span>
                        </div>
                    </div>

                    <div class="team__members">
                        <div class="team__members-block member__margo">
                            <span class="team__members-title">Margo Kesslin</span>
                            <span class="team__members-text">Developer</span>
                        </div>

                        <div class="team__members-block member__kanye">
                            <span class="team__members-title">Kanye Jones</span>
                            <span class="team__members-text">Art Director</span>
                        </div>

                        <div class="team__members-block member__marta">
                            <span class="team__members-title">Marta White</span>
                            <span class="team__members-text">Tester</span>
                        </div>
                    </div>

                    <button class="button team__button">Start work</button>
                </div>
                
            </section>
            
        `

        ROOT_TEAM.innerHTML = html
    }
}

const team = new Team()