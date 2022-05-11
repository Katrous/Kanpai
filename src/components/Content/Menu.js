import './menu.scss';
// react condition statements, page shows depending on router!
const Menu = () => {
    return (
       <div className="menu-section">
         <h1>Menu</h1>
         <h2>MON, TUES, THURS 10-6</h2>
         <h2>FRI-SUN 12-8</h2>

         <div className="menu-items">
            <ul>
                <label>Specials</label>
                <li>Special 1</li>
                <li>Special 2</li>
                <li>Special 3</li>
            </ul>

            <ul>
                <label>Sides</label>
                <li>Sides 1</li>
                <li>Sides 2</li>
            </ul>

            <ul>
                <label>Drinks</label>
                <label>Drink Type</label>
                <li>Drink 1</li>
                <li>Drink 2</li>
                <li>Drink 3</li>
                <label>Drink Type 2</label>
                <li>Drink 1</li>
                <li>Drink 2</li>
            </ul>
         </div>
       </div>
    )
}

export default Menu;