// HabilitiesSelect.jsx
import { useQuery } from "react-query";
import { useState } from "react";
import moveInfo from "./fetch/moveInfo";
import "./habilitiesSelect.css"

const HabilitiesSelect = ({ pokemon }) => {

    const [selectedMove, setSelectedMove] = useState("");
    const [selectedMoveInfo, setSelectedMoveInfo] = useState(null);
    const { data: movesInfo, isLoading: isMoveInfoLoading, isError: isMoveInfoError } = useQuery('movesInfo', moveInfo);

    if (isMoveInfoLoading) {
        return <div>Loading...</div>;
    }

    if (isMoveInfoError) {
        return <div>Error loading moves information</div>;
    }

    function handleSelected(e) {
        setSelectedMove(e.target.value);
        const selectedMoveName = e.target.value;
        const move = movesInfo.find(move => move.move === selectedMoveName);

        if (move) {
            setSelectedMoveInfo(move);
        } else {
            setSelectedMoveInfo(null); // Reiniciar selectedMoveInfo si el movimiento no se encuentra
        }
    }

    return (
        <>
            <div className='div-habilities'>
                <div className="div-move-select">
                    <label htmlFor="move">
                        Select a move
                        <select
                            id="move"
                            value={selectedMove}
                            onChange={handleSelected}
                        >
                            <option />
                            {pokemon.moves.map((move, index) => (
                                <option key={index} value={move.move.name}>
                                    {move.move.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className='div-move-info'>
                    <p>{selectedMoveInfo ? `Effect: ${selectedMoveInfo.effect}` : "Effect: Not available"}</p>
                    <p>{selectedMoveInfo ? `Damage Class: ${selectedMoveInfo.damage_class}` : "Damage Class: Not available"}</p>
                    <p>{selectedMoveInfo ? `Type: ${selectedMoveInfo.type}` : "Type: Not available"}</p>
                    <p>{selectedMoveInfo ? `Accuracy: ${selectedMoveInfo.accuracy}` : "Accuracy: Not available"}</p>
                    <p>{selectedMoveInfo ? `Power: ${selectedMoveInfo.power}` : "Power: Not available"}</p>
                    <p>{selectedMoveInfo ? `PP: ${selectedMoveInfo.pp}` : "PP: Not available"}</p>
                </div>
            </div>
        </>
    );
};

export default HabilitiesSelect;
