import customer from '@images/customer.jpg'

interface emptyInfoInterface {
    [key: string]: {
        spanTop: string;
        spanBottom: string;
        img?: string;
        buttonName?: string;
    }
}

export const emptyInfo: emptyInfoInterface = {
    'Корзина пустая': {
        spanTop: 'Вероятнее всего, вы еще не заказывали пиццу.',
        spanBottom: 'Для того, чтобы заказать пиццу, перейдите на главную страницу.',
        img: customer,
        buttonName: 'Вернуться назад'
    },
    'Произошла ошибка': {
        spanTop: 'К сожалению, не удалось получить пиццы.',
        spanBottom: 'Попробуйте повторить попытку позже.',
        buttonName: 'Попробовать снова'
    },
    'Ничего не найдено': {
        spanTop: 'К сожалению, данная страница отсутствует в нашем интернет магазине.',
        spanBottom: 'Попробуйте вернуться на главную.',
        buttonName: 'Вернуться на главную'
    },
    'Пиццы не найдены': {
        spanTop: 'Пока в нашем ассортименте отсутствуют пиццы.',
        spanBottom: 'Возможно, вам стоит зайти через какое-то время.',
        buttonName: 'Попробовать снова'
    }
}