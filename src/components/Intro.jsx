import '../styles/Intro.scss';

/**
 * Introduction du Dashboard
 * @component
 */

function Intro({user}) {

    return (
        <div className="intro">
            <h1 className={'title'}>Bonjour <span>{user.firstName}</span></h1>
            <p className={'subtitle'}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Intro;