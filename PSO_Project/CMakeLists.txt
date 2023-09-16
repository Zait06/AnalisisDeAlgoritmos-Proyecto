cmake_minimum_required(VERSION 3.0)
project(PSO_Project)
 
find_package(Eigen3 3.3 REQUIRED NO_MODULE)

set(CMAKE_CXX_FLAGS ${CMAKE_CXX_FLAGS} -Werror)
 
add_executable(
    PSO_Project 
    src/FitnessFunction/BaseFitnessFn.cpp
    src/FitnessFunction/FitnessSphere.cpp
    src/Particle/Particle.cpp
    src/PSO/PSO.cpp
    src/main.cpp
)
target_link_libraries(PSO_Project Eigen3::Eigen)