#include "Particle.h"
#include <cstdlib>

Particle::Particle() {}

Particle::Particle(int dim, LimitValues pos, LimitValues vel, BaseFitnessFn *fitFn) {
    m_minVal = vel.min;
    m_maxVal = vel.max;

    VectorType minVectorPos = VectorType::Ones(dim) * pos.min;
    VectorType minVectorVel = VectorType::Ones(dim) * vel.min;

    m_position = VectorType::Random(dim) + VectorType::Ones(dim);
    m_velocity = VectorType::Random(dim) + VectorType::Ones(dim);
    m_position = (pos.max - pos.min) * 0.5 * m_position + minVectorPos;
    m_velocity = (vel.max - vel.min) * 0.5 * m_velocity + minVectorVel;

    m_fitnessFn = fitFn;

    m_bestScore = score();
    m_bestPosition = m_position;
}

Particle::~Particle() {}

VectorType Particle::getPosition() {
    return m_position;
}

VectorType Particle::getVelocity() {
    return m_velocity;
}

float Particle::getBestScore() const {
    return m_bestScore;
}

void Particle::setBestScore(float bestScore) {
    m_bestScore = bestScore;
}

VectorType Particle::getBestPosition() {
    return m_bestPosition;
}

void Particle::setBestPosition(VectorType bestPosition) {
    m_bestPosition = bestPosition;
}

float Particle::score() const {
    return m_fitnessFn->compute(m_position);
}

void Particle::move() {
    m_position += m_velocity;
}

/*
    Compute particle m_velocity
    v=α(bp−p)+β(gbp−p)
    v=v+[α*rand1*(bp−p)]+[β*rand2*(gbp−p)]
    where
    gbp: global best particle
    bp: best m_position of the particle
    p: m_position
*/
void Particle::computeVelocity(float alpha, float betha, VectorType bestGlobPos) {
    float random = static_cast<float>(rand()) / static_cast<float>(RAND_MAX);
    m_velocity = m_velocity * 0.729;
    m_velocity += alpha * random * (m_bestPosition - m_position);
    random = static_cast<float>(rand()) / static_cast<float>(RAND_MAX);
    m_velocity += betha * random * (bestGlobPos - m_position);
    m_velocity = m_velocity.array().min(m_maxVal);
    m_velocity = m_velocity.array().max(m_minVal);
}

bool Particle::operator>(const Particle &par) {
    return score() > par.score();
}

bool Particle::operator<(const Particle &par) {
    return score() < par.score();
}

bool Particle::operator==(const Particle &par) {
    return score() == par.score();
}