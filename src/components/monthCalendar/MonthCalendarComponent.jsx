import './month-styles.css'

export const MonthCalendarComponent = () => {

    const previousSymbol = "<"
    const nextSymbol = ">"

    

    return (
        <div className='month-calendar-container'>
            <div className='month-nav'>
                <button>{previousSymbol}</button>
                <p>June 2024</p>
                <button>{nextSymbol}</button>
            </div>

            <div className='month-days-container'>
                <div className='day-name-header'>
                    <p className="day-name">mon</p>
                    <p className="day-name">tues</p>
                    <p className="day-name">weds</p>
                    <p className="day-name">thurs</p>
                    <p className="day-name">fri</p>
                    <p className="day-name">sat</p>
                    <p className="day-name">sun</p>                    
                </div>
                <div className='days-grid'>
                    <div className="day">27</div>
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>
                    <div className="day">31</div>
                    <div className="day">1</div>
                    <div className="day">2</div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                    <div className="day">6</div>
                    <div className="day">7</div>
                    <div className="day">8</div>
                    <div className="day">9</div>
                    <div className="day">10</div>
                    <div className="day">11</div>
                    <div className="day">12</div>
                    <div className="day">13</div>
                    <div className="day">14</div>
                    <div className="day">15</div>
                    <div className="day">16</div>
                    <div className="day">17</div>
                    <div className="day">18</div>
                    <div className="day">19</div>
                    <div className="day">20</div>
                    <div className="day">21</div>
                    <div className="day">22</div>
                    <div className="day">23</div>
                    <div className="day">24</div>
                    <div className="day">25</div>
                    <div className="day">26</div>
                    <div className="day">27</div>
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>
                </div>
            </div>
            
        </div>
    )
}