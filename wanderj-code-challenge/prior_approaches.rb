# def make_dict(root, path = root, dict = {})
#     children = get_children(root)
#     children.each do |child|
#         if child.directory?
#             next_path = File.join(path, child.to_s)
#             make_dict(child, next_path, dict)
#         else
#             dict[child.basename.to_s] = path
#         end
#     end
#     dict
# end

def get_children(directory)
    file = Pathname.new(directory)
    if file.directory?
        file.children
    else 
        []
    end
end

# puts make_dict('.')

class Node
    attr_accessor :name, :children
    def initialize(name)
        @name = name
        @children = []
    end
end

# q = [root]

# until q.empty?
#     curr = q.shift
#     children = get_children(curr.name)
#     children.each do |child|
#         child_node = Node.new(child.basename.to_s)
#         puts child_node.name
#         if child.directory?
#             q << child_node
#         end
#     end
# end

def dfs(root, target_file, path = root.name)
    return path if root.name == target_file

    children = get_children(path)
    children.each do |child_path|
        child_node = Node.new(child_path.basename.to_s)
        root.children << child_node
        result = dfs(child_node, target_file, child_path)
        if result 
            return result
        end
    end
    nil
end

pairs = File.readlines('files.in').map do |pair|
    pair.split(" ")
end

def get_min_distance(file_1, file_2)
    root = Node.new('.')

    path_1 = dfs(root, file_1)
    path_2 = dfs(root, file_2)

    return -1 if path_1.nil? || path_2.nil?
    
    path_1 = path_1.to_s.split("/")[0...-1]
    path_2 = path_2.to_s.split("/")[0...-1]

    return 0 if path_1 == path_2 
    
    while path_1[0] == path_2[0]
        path_1.shift 
        path_2.shift
    end

    path_1.length + path_2.length
end

result = pairs.map do |file_1, file_2|
    get_min_distance(file_1, file_2)
end

puts result