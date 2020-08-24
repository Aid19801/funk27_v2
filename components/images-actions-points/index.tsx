import styles from './action-points.module.scss';

interface Props {
    pic1: any
    pic2: any
    pic3: any
}
function ImagesAndActionPoints({ pic1, pic2, pic3 }: Props) {

    
    return (
        <div className={styles.container}>

            <div className={styles.row}>
                <img src={pic1} />
                <div className={styles.innerColumn}>
                    <h4>This is the title bit</h4>
                    <p>And here is the row. Because what we want is the blah within the things. That's what it takes. Is things with the stuff.</p>
                </div>
            </div>
            <div className={styles.row}>
                <img src={pic2} />
                <div className={styles.innerColumn}>
                    <h4>This is the title bit</h4>
                    <p>And here is the row. Because what we want is the blah within the things. That's what it takes. Is things with the stuff.</p>
                </div>
            </div>
            <div className={styles.row}>
                <img src={pic3} />
                <div className={styles.innerColumn}>
                    <h4>This is the title bit</h4>
                    <p>And here is the row. Because what we want is the blah within the things. That's what it takes. Is things with the stuff.</p>
                </div>
            </div>
        </div>
    )
}

export default ImagesAndActionPoints;