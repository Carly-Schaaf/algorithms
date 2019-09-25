# @param {Character[][]} grid
# @return {Integer}
require 'byebug'
def num_islands(grid)
    num_islands = 0

    grid.each_with_index do |row, x|
        row.each_with_index do |col, y|
            # don't perform tree traversal on water or an already-visited island
            next if grid[x][y] == "0"
            
            num_islands += 1
            q = [[x, y]]
            until q.empty?
                current_node = q.shift
                cx, cy = current_node
                grid[cx][cy] = "0"
                q += children(current_node, grid)
            end
        end
    end
    num_islands
end



def dfs(pos, grid)
    dirs = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0]
    ]
    children = []
    dirs.each do |dx, dy|
        new_pos = [pos[0] + dx, pos[1] + dy]
        x, y = new_pos
        
        # don't count water or off-board cells as children
        next unless x.between?(0, grid.length - 1)
        next unless y.between?(0, grid[0].length - 1)
        next if grid[x][y] == "0"

        # don't revisit visited children
        children << new_pos
    end
end

p num_islands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])