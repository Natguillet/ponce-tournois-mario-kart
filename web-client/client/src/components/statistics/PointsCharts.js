import React from 'react';
import { Bar } from 'react-chartjs-2';
import _ from 'lodash';
import 'chartjs-plugin-datalabels';
import { useSelector } from 'react-redux';
import { CSSTheme } from '../../utils/style';

export function TotalPointsChart({ participations }) {
    const { maxItems } = useSelector((state) => state.statistics);
    const { theme } = useSelector((state) => state.settings);

    const data = {
        labels: participations.map((p) => p.Tournament.name),
        datasets: [
            {
                barThickness: maxItems > 50 ? 8 : 10,
<<<<<<< HEAD
                backgroundColor: '#A072D5',
=======
                backgroundColor: CSSTheme[theme].mainColor,
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                datalabels: {
                    display: false,
                },
                data: participations.map((p) => _.sumBy(p.Races, 'nbPoints')),
            },
        ],
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
<<<<<<< HEAD
                    ticks: {
                        fontFamily: 'Dita',
                    },
=======
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                },
            ],
            yAxes: [
                {
                    ticks: {
<<<<<<< HEAD
                        fontFamily: 'Dita',
=======
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                        suggestedMin: 100,
                        stepSize: 50,
                    },
                },
            ],
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
            },
        },
    };

    return <Bar data={data} options={options} />;
}

export function AveragePointsChart({ participations }) {
    const { maxItems } = useSelector((state) => state.statistics);
    const { theme } = useSelector((state) => state.settings);

    const getAveragePoints = () => {
        return participations.map((p) => {
            const nbRaces = p.Races.length;
            const nbPoints = _.sumBy(p.Races, 'nbPoints');
            return nbRaces ? (nbPoints / nbRaces).toFixed(1) : 0;
        });
    };

    const data = {
        labels: participations.map((p) => p.Tournament.name),
        datasets: [
            {
                barThickness: maxItems > 50 ? 8 : 10,
<<<<<<< HEAD
                backgroundColor: '#A072D5',
=======
                backgroundColor: CSSTheme[theme].mainColor,
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                datalabels: {
                    display: false,
                },
                data: getAveragePoints(),
            },
        ],
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
<<<<<<< HEAD
                    ticks: {
                        fontFamily: 'Dita',
                    },
=======
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                },
            ],
            yAxes: [
                {
                    ticks: {
<<<<<<< HEAD
                        fontFamily: 'Dita',
=======
>>>>>>> f8a5a67af995a9406b5c9be3b6746034bb0b9c77
                        max: 15,
                        stepSize: 5,
                    },
                },
            ],
        },
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 21,
                bottom: 20,
            },
        },
    };

    return <Bar data={data} options={options} />;
}
