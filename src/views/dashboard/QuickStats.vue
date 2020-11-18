<template>
    <ul class="main-stats">
        <li style="background: #00bcd5">
            <img
                src="../../assets/icon-document-report.svg"
                width="40"
                height="40"
            />
            <h2>5,001</h2>
            <p>
                Total Tickets <br />
                Sold
            </p>
            <div></div>
        </li>

        <li style="background: #00bcd5">
            <img src="../../assets/icon-currency.svg" width="40" height="40" />
            <h2 class="tot-revenue">675,071</h2>
            <p>Today Total Revenue</p>
            <div></div>
        </li>

        <li style="background: #00bcd5">
            <img src="../../assets/icon-printer.svg" width="40" height="40" />
            <h2>5,554</h2>
            <p>
                Total <br />
                Validations
            </p>
            <div></div>
        </li>

        <li style="background: linear-gradient(154.3deg, #FF922D 5.63%, rgba(255, 122, 0, 0.74) 98.14%)">
            <img src="../../assets/icon-emoji-sad.svg" width="40" height="40" />
            <h2>23</h2>
            <p>Cancelled Reservations</p>
            <div></div>
        </li>
    </ul>
</template>

<style scoped lang="less">
.main-stats {
    margin: 0;
    padding: 0;
    width: 100%;

    li {
        list-style: none;
        display: inline-table;
        border-radius: 25px;
        color: #fff;
        height: 180px;
        width: 119px;
        margin-right: 5px;
        margin-bottom: 5px;
        cursor: pointer;

        &:hover {
            div {
                width: 30%;
            }
        }
        img {
            transform: translate(5px, 20px);
        }

        h2,
        p {
            padding-left: 10px;
            margin: 20px 0 10px 0;
            text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }
        .tot-revenue::after {
            content: "USD";
            font-size: 10px;
        }
        p {
            margin: 0;
            font-size: 0.9em;
            font-weight: 400;
        }
        div {
            position: relative;
            left: 10px;
            margin-top: 10px;
            border-bottom: 1px solid #fff;
            width: 20%;
            transition: 0.1s ease-in;
        }
    }
}
</style>