# ReactJS. Базовый курс
Домашнее задание 3
Студент - Цокало Жан

Вот, что получилось на данный момент. На мой взгляд очень привлекательно выглядит и достаточно функционально работает. Даже не думал, что у меня так получится. Я в восторге.
Однако при помощи Material UI удалось реализовать только поле ввода сообщения и кнопку отправки.
Изучив возможности Material UI, изначально была идея за основу взять вот этот drawer
https://material-ui.com/ru/components/drawers/#clipped-under-the-app-bar
слева в качестве списка чатов использовать вот этот компонент
https://material-ui.com/ru/components/lists/#selected-listitem
или этот
https://material-ui.com/ru/components/tabs/#vertical-tabs
или скомпоновать их, чтобы выбранный чат был выделен, а в header'е отображалось название выбранного чата.
Однако при попытке реализовать список чатов, приложение хоть и компилировалось без ошибок, но не отрисовывалось в браузере.
Скорее всего проблема была в попытке вызвать функцию
const useStyles = makeStyles((theme) => ({
в классовом компоненте. Ещ видимо браузер ругался на попытку вызвать хуки также в классовом компоненте. Проблему решить не удалось, т.к. в Material UI все компоненты описаны как функциональные, а мы используем классовые с объектом состояния компонента.
Отсюда есть пара вопросов к следующему уроку:
1. Каким образом мы можем использовать компоненты из Material UI вместе со встроенной стилизацией внутри наших классовых компонентов?
2. Как именно нужно было расположить элементы Layout, ChatList и Header на странице? В тексте задания указано, что они должны быть в виде компонентов. Каким образом тогда нам нужно организвать код, чтобы использовать их в виде компонентов?