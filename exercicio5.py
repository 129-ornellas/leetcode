# lembrar: se o número da frente for maior q o número de trás, ele subtrai
class Solution:
    def romanToInt(self, s: str) -> int:
        count = 0
        romanos = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }

        for i in range(0, len(s)):
            letra_atual = s[i]
            ultima = len(s) - 1
            if i != ultima:
                proxima = s[i+1]
                if romanos[proxima] > romanos[letra_atual]:
                    count = (-romanos[letra_atual]) + count
                else:
                    count = romanos[letra_atual] + count
            else:
                count = romanos[letra_atual] + count
            # print(valor_da_letra)
        return count


a = Solution()
print(a.romanToInt("MCMXCIV"))