#include "PSO.h"
#include <algorithm>
#include "../FitnessFunction/FitnessSphere.h"

PSO::PSO(int size, float min, float max, int dim) {
    m_size = size;
    m_population = new Particle[size];
    m_bestGlobalScore = std::numeric_limits<float>::infinity();

    for (int idx = 0; idx < size; idx++)
        m_population[idx] = Particle(dim, {min, max}, {min, max}, new FitnessSphere());
}

PSO::~PSO() {
    delete[] m_population;
}

void PSO::setLocalFactor(float factor) {
    m_localFactor = factor;
}

float PSO::getLocalFactor() {
    return m_localFactor;
}

void PSO::setGlobalFactor(float factor) {
    m_globalFactor = factor;
}

float PSO::getGlobalFactor() {
    return m_globalFactor;
}

Particle PSO::getBestGlobalParticle() const {
    return m_bestGlobalParticle;
}

void PSO::train(int generations) {
    for (int gen = 0; gen < generations; gen++) {

        if (gen % 10 == 0) {
            std::cout << "Gen: " << gen << " best score: " << m_bestGlobalScore << std::endl;
        }

        for (int idx = 0; idx < m_size; idx++) {
            float score = m_population[idx].score();
            if (score < m_population[idx].getBestScore()) {
                m_population[idx].setBestScore(score);
                m_population[idx].setBestPosition(m_population[idx].getPosition());
            }
            if (score < m_bestGlobalScore) {
                m_bestGlobalScore = score;
                m_bestGlobalParticle = m_population[idx];
            }
        }
        for (int idx = 0; idx < m_size; idx++) {
            m_population[idx].computeVelocity(
                m_localFactor,
                m_globalFactor,
                m_bestGlobalParticle.getPosition());
            m_population[idx].move();
        }
    }
}