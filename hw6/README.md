# ReactJS. Базовый курс
Домашнее задание 6
Студент - Цокало Жан

С прошлого раза приложение причесал немного. Устранил ошибки, из-за которых приложение падало, с помощью дополнительных проверок. Кое-где подправил стили.
Востальном реализовал функционал ДЗ №6 без задания со *. В первом приближении вроде работает правда с некоторыми нюансами, о которых ниже.

Задание 3 реализовал в файлах messageMiddleware.js и ChatList.jsx Но почему-то componentDidUpdate как-то странно работает. Происходит задержка в отрисовывании в один шаг. Не сразу отрисовывает изменения в store Redux, хотя должен сразу. Подозреваю, что в некорректном поведении виноват redux-persist, но не успел это проверить, слишком муторно его было подключать, поэтому не хочется отключать)) Тем более в ДЗ его нужно было установить, поэтому в рамках этого ДЗ его оставлю.

По заданию 4. Не стал портить приложение заменой компонентов NavLink или Link где бы то ни было на push, а вместо этого использовал метод push при добавлении нового чата, чтобы сразу после добавления осуществлялся переход в новый чат. Это на мой взгляд логично. Но немного странно работает. Хотя push у меня расположен после функции addChat из соответствующего Action'а (т.е. store уже должен быть обновлёни располагать актуальной информацией), он почему-то длину массива с чатами берёт не актуальную, а из предыдущего состояния, поэтому в строке 31 файла ChatList.jsx используется костыльное .length + 1


Вопрос. В файле Layout.jsx можно ли currentChat в виде параметра передать во все компоненты внутри Layout централизованно один раз, а не передавать в кадый компонент отдельно?