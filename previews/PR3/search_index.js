var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [ITensorQuantumOperatorDefinitions]","category":"page"},{"location":"","page":"Home","title":"Home","text":"EditURL = \"../../examples/README.jl\"","category":"page"},{"location":"#ITensorQuantumOperatorDefinitions.jl","page":"Home","title":"ITensorQuantumOperatorDefinitions.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage) (Image: Code Style: Blue) (Image: Aqua)","category":"page"},{"location":"#Installation-instructions","page":"Home","title":"Installation instructions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package resides in the ITensor/ITensorRegistry local registry. In order to install, simply add that registry through your package manager. This step is only required once.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg: Pkg\n\njulia> Pkg.Registry.add(url=\"https://github.com/ITensor/ITensorRegistry\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"or:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> Pkg.Registry.add(url=\"git@github.com:ITensor/ITensorRegistry.git\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"if you want to use SSH credentials, which can make it so you don't have to enter your Github ursername and password when registering packages.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then, the package can be added as usual through the package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> Pkg.add(\"ITensorQuantumOperatorDefinitions\")","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using ITensorQuantumOperatorDefinitions:\n  OpName, SiteType, StateName, ⊗, controlled, op, state\nusing LinearAlgebra: Diagonal\nusing SparseArrays: SparseMatrixCSC, SparseVector\nusing Test: @test\n\n@test state(\"0\") == [1, 0]\n@test state(\"1\") == [0, 1]\n\n@test state(Float32, \"0\") == [1, 0]\n@test eltype(state(Float32, \"1\")) === Float32\n\n@test Vector(StateName(\"0\")) == [1, 0]\n@test Vector(StateName(\"1\")) == [0, 1]\n\n@test Vector{Float32}(StateName(\"0\")) == [1, 0]\n@test eltype(Vector{Float32}(StateName(\"0\"))) === Float32\n\n@test state(SparseVector, \"0\") == [1, 0]\n@test state(SparseVector, \"0\") isa SparseVector\n\n@test state(\"0\", 3) == [1, 0, 0]\n@test state(\"1\", 3) == [0, 1, 0]\n@test state(\"2\", 3) == [0, 0, 1]\n\n@test Vector(StateName(\"0\"), 3) == [1, 0, 0]\n@test Vector(StateName(\"1\"), 3) == [0, 1, 0]\n@test Vector(StateName(\"2\"), 3) == [0, 0, 1]\n\n@test op(\"X\") == [0 1; 1 0]\n@test op(\"Y\") == [0 -im; im 0]\n@test op(\"Z\") == [1 0; 0 -1]\n\n@test op(\"Z\") isa Diagonal\n\n@test op(Float32, \"X\") == [0 1; 1 0]\n@test eltype(op(Float32, \"X\")) === Float32\n@test op(SparseMatrixCSC, \"X\") == [0 1; 1 0]\n@test op(SparseMatrixCSC, \"X\") isa SparseMatrixCSC\n\n@test Matrix(OpName(\"X\")) == [0 1; 1 0]\n@test Matrix(OpName(\"Y\")) == [0 -im; im 0]\n@test Matrix(OpName(\"Z\")) == [1 0; 0 -1]\n\n@test Matrix(OpName(\"Rx\"; θ=π / 3)) ≈ [sin(π / 3) -cos(π / 3)*im; -cos(π / 3)*im sin(π / 3)]","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"This page was generated using Literate.jl.","category":"page"}]
}
