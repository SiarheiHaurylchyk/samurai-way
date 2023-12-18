import React from 'react';
import style from './Dialogs.module.css'

function Dialogs() {
    return (

            <div className={style.dialogs}>
                <div className={style.dialogItems}>
                    <div className={style.dialog}>Andrey</div>
                    <div className={style.dialog}>Sergey</div>
                    <div className={style.dialog}>Sacha</div>
                    <div className={style.dialog}>Natacha</div>
                </div>
                <div className={style.dialogsMesage}>
                    <div className={style.dialogMessage}>Привет</div>
                    <div className={style.dialogMessage}>Как дела?</div>
                    <div className={style.dialogMessage}>Что нового?</div>
                    <div className={style.dialogMessage}>Как прошел день?</div>
                </div>
            </div>

    );
}

export default Dialogs;