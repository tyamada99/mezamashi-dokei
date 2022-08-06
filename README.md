# micro:bitでめざまし時計

![badje](https://img.shields.io/badge/micro%3Abit-V2-brightgreen)

micro:bitの拡張機能：[microbit-pxt-timeanddate](https://makecode.microbit.org/pkg/bsiever/microbit-pxt-timeanddate)を使用しためざまし時計です。rtcモジュールを使わず、micro:bit単体で動作します。

## 使い方

### 事前準備
変数："時", "分", "アラーム時", "アラーム分" を適切な値に変更します。
現在時刻やアラームしたい時刻に近い値を入れておくと、micro:bitでの設定が楽になります。
設定後、makecodeからmicro:bitにダウンロードします。

### 初期設定
現在時刻とアラーム時刻を設定します。

1. 「時」の設定

    LEDに”Hour"と表示されるので、現在時刻の「時」を24時間制で、下記ボタン操作で設定します。
    表示される数字は現在設定されている"時"の値です。

    |ボタン操作|動作|
    |----------|---|
    |Aボタン|1つ上がります。|
    |Bボタン|1つ下がります。|
    |A+Bボタン|"分"の設定に移ります。|

2. 「分」の設定

    LEDに"Minute"と表示されるので、現在時刻の「分」を下記ボタン操作で設定します。
    表示される数字は現在設定されている"分"の値です。

    |ボタン操作|動作|
    |---------|----|
    |Aボタン|1つ上がります。|
    |Bボタン|1つ下がります。|
    |A+Bボタン|設定された現在時刻が表示され、”アラーム時”の設定に移ります。|

3. 「アラーム時」の設定

    LEDに”Alm Hr"と表示されるので、アラームの「時」を24時間制で設定します。
    表示される数字は現在設定されている"アラーム時"の値です。

    |ボタン操作|動作|
    |---------|----|
    |Aボタン|1つ上がります。|
    |Bボタン|1つ下がります。|
    |A+Bボタン|”アラーム分”の設定に移ります。|

4. 「アラーム分」の設定
    LEDに”Alm min"と表示されるので、アラームの「分」を設定します。
    表示される数字は現在設定されている"アラーム分"の値です。

    |ボタン操作|動作|
    |---------|----|
    |Aボタン|1つ上がります。|
    |Bボタン|1つ下がります。|
    |A+Bボタン|設定されたアラーム時刻が表示されて、「稼働中」になります。|


### 稼働中
アラーム時刻になるまでは、下記ボタン操作で現在時刻、アラーム時刻を表示できます。

|ボタン操作|動作|
|---------|----|
|Aボタン|現在時刻を表示します。|
|Bボタン|アラーム時刻を表示します。|

### アラーム時刻になったとき
LEDに"♪"が表示され、アラームが流れます。
A+Bボタンを押すとアラームが止まります。

<!--
> このページを開く [https://tyamada99.github.io/mezamashi-dokei/](https://tyamada99.github.io/mezamashi-dokei/)
-->

<!--
## 拡張機能として使用

このリポジトリは、MakeCode で **拡張機能** として追加できます。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **新しいプロジェクト** をクリックしてください
* ギアボタンメニューの中にある **拡張機能** をクリックしてください
* **https://github.com/tyamada99/mezamashi-dokei** を検索してインポートします。
-->

## このプロジェクトを編集します ![ビルド ステータス バッジ](https://github.com/tyamada99/mezamashi-dokei/workflows/MakeCode/badge.svg)

MakeCode でこのリポジトリを編集します。

* [https://makecode.microbit.org/](https://makecode.microbit.org/) を開く
* **読み込む** をクリックし、 **URLから読み込む...** をクリックしてください
* **https://github.com/tyamada99/mezamashi-dokei** を貼り付けてインポートをクリックしてください

## ブロックのプレビュー

この画像はマスター内の最後のコミットからのブロックコードを示しています。
このイメージは更新に数分かかる場合があります。

![生成されたブロック](https://github.com/tyamada99/mezamashi-dokei/raw/master/.github/makecode/blocks.png)

<!--
#### メタデータ (検索、レンダリングに使用)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
-->
