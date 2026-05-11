'use client';

const ExploreBtn = () => {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log('Click')}>
            <a href="#events">
                Search Events
            </a>
        </button>

    )
}

export default ExploreBtn