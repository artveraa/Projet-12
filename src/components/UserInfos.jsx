import '../styles/UserInfos.scss';
import calorie from '../svg/calorie.svg';
import proteine from '../svg/proteine.svg';
import glucide from '../svg/glucide.svg';
import lipid from '../svg/lipid.svg';

function UserInfos({infos}) {
    return (
        <div className="user-infos">
            <div className={'user-info-card calorie'}>
                <div className={'calorie-icon icon'}>
                    <img src={calorie} alt="calorie"/>
                </div>
                <p>
                    {infos.calorieCount / 1000}kCal
                    <span>Calories</span>
                </p>
            </div>

            <div className={'user-info-card proteine'}>
                <div className={'proteine-icon icon'}>
                    <img src={proteine} alt="proteine"/>
                </div>
                <p>
                    {infos.proteinCount}g
                    <span>Proteines</span>
                </p>
            </div>

            <div className={'user-info-card carbo'}>
                <div className={'carbo-icon icon'}>
                    <img src={glucide} alt="glucide"/>
                </div>
                <p>
                    {infos.carbohydrateCount}g
                    <span>Glucides</span>
                </p>
            </div>

            <div className={'user-info-card lipid'}>
                <div className={'lipid-icon icon'}>
                    <img src={lipid} alt="lipid"/>
                </div>
                <p>
                    {infos.lipidCount}g
                    <span>Lipides</span>
                </p>
            </div>
        </div>
    )
}

export default UserInfos;