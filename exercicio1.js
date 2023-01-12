class Solution:
    def isValid(self, s: str) -> bool:
        validador = False
        if ('(' in s):
            if ')' in s:
                for fecha in list(s):
                    if s.index(')') > s.index('('):
                        validador = True
                    if s.index(')') < s.index('('):
                        validador = False

        if ('[' in s):
            if (']' in s):
                for fecha in list(s):
                    if s.index(']') > s.index('['):
                        validador = True
                    if s.index(']') < s.index('['):
                        validador = False

        if ('{' in s):
            if ('}' in s):
                for fecha in list(s):
                    if s.index('}') > s.index('{'):
                        validador = True
                    if s.index('}') < s.index('{'):
                        validador = False
        return validador
a = Solution()
print(a.isValid('([)]'))

def isValid(s):
    validas = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    lista = []
    for entrada in list(s):
        if s.index(entrada) == validas[lista[len(lista)]]:
            lista.append(entrada)
        else:
            lista.append(entrada.index)