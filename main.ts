// 選択肢と、それぞれの裏に隠された「実際の数値」を定義
enum MySubValues {
    //% block="遅く"
    Slow = 10,
    //% block="普通"
    Normal = 50,
    //% block="速く"
    Fast = 100
}

//% color="#2b59ff"
namespace myRobot {
    /**
     * 速度を選択肢から選ぶブロック
     */
    //% block="スピードを %n にする"
    //% n.shadow="my_speed_dropdown" // 下で定義するパーツを影として指定
    export function setSpeed(n: number): void {
        // n には 10, 50, 100 のいずれかの「数値」が入ってくる
    }

    // 隠し要素としてドロップダウンのブロック単体を作る（shimでBlocksから隠す）
    //% blockId=my_speed_dropdown block="%v"
    //% shim=TD_ID
    export function _speedDropdown(v: MySubValues): number {
        return v;
    }
}