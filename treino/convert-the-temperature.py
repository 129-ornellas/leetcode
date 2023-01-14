class Solution:
    def convertTemperature(self, celsius: float) -> list[float]:
        fahrenheit = (celsius * 9/5) + 32
        kelvin = celsius + 273.15 
        # lista = []
        # lista.append(fahrenheit)
        return [(celsius * 1.80) + 32, celsius+ 273.15 ]


a = Solution()
print(a.convertTemperature(30))