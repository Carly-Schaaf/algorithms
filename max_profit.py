# VARIABLE APPROACH - O(1) SPACE COMPLEXITY
def max_profit(prices):
    if not prices:
        return 0
        
    min = prices[0]
    max = 0

    for price in prices[1:]:
        if price < min:
            min = price 
        elif (price - min > max):
            max = price - min
    
    return max

print(max_profit([7,1,5,3,6,4]))

# TABULAR FORMAT - SPACE COMPLEXITY O(N)
# def max_profit(prices):
#     if not prices:
#         return 0

#     min = prices[0]
#     table = [0]

#     for price in prices[1:]:
#         if price < min:
#             min = price 
#         elif (price - min > table[-1]):
#             table.append(price-min)
#         else:
#             table.append(table[-1])
    
#     return table[-1]

# print(max_profit([]))