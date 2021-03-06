# traffic-lights

## Интро

traffic-lights - SPA, эмулирующее работу светофора.
Приложение состоит из трех экранов:
- Экран 1: горит красный (зеленый и желтый тусклые/полупрозрачные)
- Экран 2: горит желтый (зеленый и красный тусклые/полупрозрачные)
- Экран 3: горит зеленый (красный и желтый тусклые/полупрозрачные)

## Алгоритм работы приложения
Светофор работает циклически: красный('/red') -> желтый('/yellow') -> зеленый('/green') -> желтый('/yellow') -> красный('/red') -> ...

При смене сигнала меняется роут в адресной строке.

**Уточнения:**
1. если перейти по несуществующему маршруту пользователь перенаправлятся на маршрут '/red',
2. если в адресной строке ввести '/yellow', то светофор работает в последовательности: желтый('/yellow') -> зеленый('/green') -> желтый('/yellow') -> красный('/red') -> ...
3. если в адресной строке ввести '/', то
   - если нет данных о предыдущем состоянии светофора, то пользователь перенаправляется на маршрут '/red'
   - если есть данные о предыдущем состоянии светофора, то светофор продолжает работу с того состояния, на котором была ранее прервана работа приложения

### Установка
1. Установить приложение командой npm install
2. Запустить приложение командой npm run start
